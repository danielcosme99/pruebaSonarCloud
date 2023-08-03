:-dynamic tiene/1.
lista([]):-enfermedad(E),write(E).
lista([H|T]):-assert(tiene(H)),lista(T).
test(X):-limpiar,lista(X).

# enfermedad('E1'):-tiene(s1), tiene(s2), tiene(s3), tiene(s4), (tiene(s5); tiene(s6)), tiene(s12), tiene(s14).
# enfermedad('E2'):-tiene(s1), (tiene(s2); tiene(s3)), tiene(s4), tiene(s10), tiene(s11), tiene(s13), tiene(s14).
# enfermedad('E3'):-tiene(s1), tiene(s2), tiene(s8), tiene(s9), tiene(s10) , tiene(s13), tiene(s14).
# enfermedad('E4'):-tiene(s1), tiene(s6), tiene(s8), tiene(s14), tiene(s16), tiene(s18).
# enfermedad('E5'):-tiene(s1), tiene(s8),(tiene(s11); tiene(s19)), tiene(s20).
# enfermedad('E6'):-tiene(s1), tiene(s2), tiene(s3), tiene(s14), tiene(s20).

enfermedad('E1'):-tiene(s10),tiene(s5) ,tiene(s11),tiene(s13),tiene(s15).
enfermedad('E2'):-tiene(s14), tiene(s8),tiene(s7),tiene(s5),tiene(s9).
enfermedad('E3'):-tiene(s16),tiene(s17),tiene(s18),tiene(s19),tiene(s20),tiene(s2) .
enfermedad('E4'):-tiene(s1),tiene(s2),tiene(s3),tiene(s4),tiene(s5),tiene(s6),tiene(s12),tiene(s14) .

enfermedad(_):-fail.
limpiar:-retract(tiene(_)),fail.
limpiar.