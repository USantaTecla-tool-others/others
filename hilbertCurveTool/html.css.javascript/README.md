The Hilbert Curve can be expressed by a rewrite system (L-system).
https://en.wikipedia.org/wiki/Hilbert_curve#Representation_as_Lindenmayer_system

    Alphabet : A, B
    Constants : F + -
    Axiom : A
    Production rules:

        A -> - B F + A F A + F B -
        B -> + A F - B F B - F A +

	Here: 	
		"F" means "draw forward", 
		"-" means "turn left 90 degrees", 	
		"+" means "turn right 90 degrees" and 
		"A" and "B" are ignored during drawing.
		
