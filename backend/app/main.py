from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import select

from app.db import SessionLocal
from app.models.customer import Customer


app = FastAPI()

# -----------------------
# CORS (for Next.js)
# -----------------------
# Allow Next.js frontend to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------
# DB dependency
# -----------------------
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# -----------------------
# Basic health check
# -----------------------
@app.get("/")
def root():
    return {"message": "API is running"}


# -----------------------
# Get all customers
# -----------------------
@app.get("/data")
def get_customers(db: Session = Depends(get_db)):
    stmt = select(Customer)
    customers = db.scalars(stmt).all()

    return [
        {
            "id": c.id,
            "customer_name": c.customer_name,
            "customer_value": c.customer_value,
        }
        for c in customers
    ]
