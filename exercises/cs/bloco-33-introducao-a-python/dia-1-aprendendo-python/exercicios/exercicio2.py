def media(numbers):
    cont = 0
    for number in numbers:
        cont += number
    return cont / len(numbers)


print(media([1, 2, 3, 4]))
