from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase):
    pass


# Define the Customer model table
class Customer(Base):
    __tablename__ = "test_1"

    id: Mapped[int] = mapped_column(primary_key=True)
    customer_name: Mapped[str] = mapped_column()
    customer_value: Mapped[float] = mapped_column()
