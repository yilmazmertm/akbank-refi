def calculate_for_one_product(product):
    kai_first = product.used_resource_one.product_kai_by_amount
    kai_first_amount = product.used_resource_one_amount
    kai_second = product.used_resource_two.product_kai_by_amount
    kai_second_amount = product.used_resource_two_amount

    employee_kai_first = product.used_employee_one.kai_for_employee
    employee_kai_second = product.used_employee_two.kai_for_employee

    return int(kai_first * kai_first_amount) + int(
        kai_second * kai_second_amount) + employee_kai_first + employee_kai_second
