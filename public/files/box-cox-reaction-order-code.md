# Box–Cox analysis of reaction order

R session notes for the three concentration–time series. The original CSVs are inlined below as tables and as `data.frame()` calls, so the script does not need separate data files.

Each block fits `C ~ t`, then runs `boxcox()` over λ from −2 to 2. The λ that maximises the profile log-likelihood is compared with the transform implied by first-order, one-and-a-half-order, or second-order kinetics.

```r
library(MASS)
```

## Second-order series

| t | C |
|---|---|
| 0 | 0.0054 |
| 10 | 0.0044 |
| 26 | 0.0034 |
| 44 | 0.0027 |
| 70 | 0.0020 |
| 120 | 0.0014 |

```r
rm(list = ls())
second_order_rxn_data <- data.frame(
  t = c(0, 10, 26, 44, 70, 120),
  C = c(0.0054, 0.0044, 0.0034, 0.0027, 0.0020, 0.0014)
)
model <- lm(C ~ t, data = second_order_rxn_data)
bc <- boxcox(model, lambda = seq(-2, 2, 0.01), plotit = TRUE)
```

## First-order series

| t | C |
|---|---|
| 0 | 1 |
| 6 | 0.5 |
| 12 | 0.25 |
| 18 | 0.125 |
| 24 | 0.0625 |

```r
rm(list = ls())
first_order_rxn_data <- data.frame(
  t = c(0, 6, 12, 18, 24),
  C = c(1, 0.5, 0.25, 0.125, 0.0625)
)
model <- lm(C ~ t, data = first_order_rxn_data)
bc <- boxcox(model, lambda = seq(-2, 2, 0.01), plotit = TRUE)
```

## One-and-a-half-order series

| t | C |
|---|---|
| 0 | 4 |
| 12 | 3.2 |
| 29 | 2.4 |
| 41 | 2.0 |
| 58 | 1.6 |
| 83 | 1.2 |

```r
rm(list = ls())
one_and_a_half_order_rxn_data <- data.frame(
  t = c(0, 12, 29, 41, 58, 83),
  C = c(4, 3.2, 2.4, 2.0, 1.6, 1.2)
)
model <- lm(C ~ t, data = one_and_a_half_order_rxn_data)
bc <- boxcox(model, lambda = seq(-2, 2, 0.01), plotit = TRUE)
```
