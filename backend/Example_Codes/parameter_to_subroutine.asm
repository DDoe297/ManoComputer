ORG 100
LDA X
BSA OR
HEX 0F0F
STA Y
HLT
X, HEX F0F0
Y, HEX 0
OR, HEX 0
CMA
STA TMP
LDA OR I
CMA
AND TMP
CMA
ISZ OR
BUN OR I
TMP, HEX 0
END