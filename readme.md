# I am not a mathematician

this simple program was made to check if my math formula was right

## a little bit of story

One day a friend of mine asked me what were the odds to roll at least four 1s and/or 2s when rolling six dices (standrad 6 faces dices).

I took on the problem and I came up with this formula :

$$
f(x) = \frac{\sum_{n=a}^{x} 2^{x-n} \cdot \left( \frac{x!}{(x-n)! \cdot (x - (x-n))!} \right)}{3^x}
$$

I am not a mathematician though and I had to check if I was right (or at least close) and this is why this program was made.
