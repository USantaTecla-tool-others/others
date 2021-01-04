The Koch Curve can be expressed by a rewrite system (L-system).
https://en.wikipedia.org/wiki/Koch_snowflake#Representation_as_Lindenmayer_system

    Alphabet : F
    Constants : + - 
    Axiom : F
    Production rules:
    F -> F+F--F+F

	Here, 	F means "draw forward", 
			- means "turn right 60 deg", 
			and + means "turn left 60 deg".

To create the Koch snowflake, one would use F--F--F (an equilateral triangle) as the axiom.
This code is based on following assumptions:

	 Variable: F
	 Constants: + - 
	 Axiom (start value): F-F-F
	 Rule: F -> F+F-F+F
		 F means draw forward (current direction)
		 + means turn 60 deg left, 
		 - means turn 120 deg right 
		 
