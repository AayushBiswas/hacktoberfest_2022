#include<stdio.h>
#include<conio.h>
int main()
{
    int num1, num2, add;
    printf("Enter any two number: ");
    scanf("%d%d", &num1, &num2);
    add = num1+num2;
    printf("\nSum of %d and %d is %d", num1, num2, add);
    getch();
    return 0;
}
