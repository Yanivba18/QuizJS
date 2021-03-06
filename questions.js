data = [{
    'question': '\nWhat does the expression\xa0 <tt>1 &gt; 0</tt> \xa0evaluate to?',
    'explanation': 'Ok, great. That one was a freebie. Of course one is greater than zero.',
    'answers': ['0', '1', 'undefined'],
    'correct': [2]
}, {
    'question': '\nWhat does the expression\xa0 <tt>1U &gt; -1</tt> \xa0evaluate to?',
    'explanation': "C has both signed and unsigned types, creating the potential for confusion when these are mixed. The simple version of the rule for resolving this situation (we'll get to the real version shortly)\n is that unsigned wins. In other words, if a signed value is compared against an unsigned, the signed value is cast to unsigned and then the comparison is performed between two unsigned values. Therefore, this comparison is actually between 1 and UINT_MAX,\n which evaluates to 0. Good C programmers often avoid mixing signed and unsigned values in the same expression. Good C compilers warn about this, but GCC only does so at fairly high warning levels.",
    'answers': ['0', '1', 'undefined'],
    'correct': [1]
}, {
    'question': '\nWhat does the expression\xa0 <tt>(unsigned short)1 &gt; -1</tt> \xa0evaluate to?',
    'explanation': 'In this question, two signed values are being compared. In other words, the rule about converting one operand of a comparison to unsigned if one of them is unsigned does not apply. This is because\n C "promotes" both operands to arithmetic operators to int type before performing the operation. The rule for promotion states that an unsigned value is promoted to a signed int if (as is the case for promoting an unsigned short to an int) this can be done\n without losing values. On the other hand (as we saw in the previous question) an unsigned int is not promoted to signed int because this would change large values into negatives. The full rules for promotions are a bit more complicated than this, for example\n to handle the case of types like long that may be wider than int.',
    'answers': ['0', '1', 'undefined'],
    'correct': [2]
}, {
    'question': '\nWhat does the expression\xa0 <tt>-1L &gt; 1U</tt> \xa0evaluate to on x86-64? On x86?',
    'explanation': 'This one is a little tricky because it asks you to analyze a feature interaction. On x86-64, int is shorter than long. Therefore, an unsigned int can be promoted to long, making the comparison\n signed. The comparison thus becomes -1L > 1L, which is false. On x86, int and long are the same size. Therefore, int cannot be promoted to long without changing values. On this platform, the comparison becomes UINT_MAX > 1U, which is true.',
    'answers': ['0 on both platforms', '1 on both platforms', '0 on x86-64, 1 on x86', '1 on x86-64, 0 on x86'],
    'correct': [3]
}, {
    'question': '\nWhat does the expression\xa0 <tt>SCHAR_MAX == CHAR_MAX</tt> \xa0evaluate to?',
    'explanation': 'Sorry about that -- I didn\'t give you enough information to answer this one. The signedness of the char type is implementation-defined, meaning the each C implementation is permitted to make\n its own choice, provided that the choice is documented and consistent. ABIs for x86 and x86-64 tend to specify that char is signed, which is why I\'ve said that "1" is the correct answer here.',
    'answers': ['0', '1', 'undefined'],
    'correct': [2]
}, {
    'question': '\nWhat does the expression\xa0 <tt>UINT_MAX + 1</tt> \xa0evaluate to?',
    'explanation': 'The C standard guarantees that UINT_MAX+1 is 0.',
    'answers': ['0', '1', 'INT_MAX', 'UINT_MAX', 'undefined'],
    'correct': [1]
}, {
    'question': '\nWhat does the expression\xa0 <tt>INT_MAX + 1</tt> \xa0evaluate to?',
    'explanation': 'Overflowing a signed integer is an undefined behavior.',
    'answers': ['0', '1', 'INT_MAX', 'UINT_MAX', 'INT_MIN', 'undefined'],
    'correct': [6]
}, {
    'question': '\nWhat does the expression\xa0 <tt>-INT_MIN</tt> \xa0evaluate to?',
    'explanation': "When using two's complement integers, INT_MIN has no representable inverse. Moreover, trying to compute it is an undefined behavior in C.",
    'answers': ['0', '1', 'INT_MAX', 'UINT_MAX', 'INT_MIN', 'undefined'],
    'correct': [6]
}, {
    'question': '\nAssume\xa0 <tt>x</tt> \xa0has type\xa0 <tt>int</tt> . Is the expression\xa0 <tt>x&lt;&lt;0</tt> ...',
    'explanation': 'Whoops... I thought this was always defined but as a couple of commenters point out, a negative value cannot be left-shifted even by zero bit positions.',
    'answers': ['defined for all values of x', 'defined for some values of x', 'defined for no values of x'],
    'correct': [2]
}, {
    'question': '\nAssume\xa0 <tt>x</tt> \xa0has type\xa0 <tt>int</tt> . Is the expression\xa0 <tt>x&lt;&lt;1</tt> ...',
    'explanation': 'Shifting a 1 into the sign bit is an error in C99. Therefore, shifting a large value such as INT_MAX left by one bit position is an undefined behavior. Other values can be safely left-shifted.',
    'answers': ['defined for all values of x', 'defined for some values of x', 'defined for no values of x'],
    'correct': [2]
}, {
    'question': '\nAssume x has type\xa0 <tt>int</tt> . Is the expression\xa0 <tt>x&lt;&lt;31</tt> ...',
    'explanation': 'This is basically the same situation as the previous question. A 1 cannot be left-shifted into, or past, the signed bit. Therefore, I believe that 0 is the only value of type int that can be\n left-shifted by 31 bit positions without executing an undefined behavior.',
    'answers': ['defined for all values of x', 'defined for some values of x', 'defined for no values of x'],
    'correct': [2]
}, {
    'question': '\nAssume x has type\xa0 <tt>int</tt> . Is the expression\xa0 <tt>x&lt;&lt;32</tt> ...',
    'explanation': 'Shifting (in either direction) by an amount equalling or exceeding the bitwidth of the promoted operand is an error in C99.',
    'answers': ['defined for all values of x', 'defined for some values of x', 'defined for no values of x'],
    'correct': [3]
}, {
    'question': '\nAssume x has type\xa0 <tt>short</tt> . Is the expression\xa0 <tt>x&lt;&lt;29</tt> ...',
    'explanation': 'Operands to shift operators are promoted before the shift executes. Therefore, the fact that 29 is not less than 16 is irrelevant and a shift-past-bitwidth error does not occur.',
    'answers': ['defined for all values of x', 'defined for some values of x', 'defined for no values of x'],
    'correct': [2]
}, {
    'question': '\nAssume x has type\xa0 <tt>unsigned</tt> . Is the expression\xa0 <tt>x&lt;&lt;31</tt> ...',
    'explanation': 'Any value whose promoted type is "unsigned" can be legally shifted by an amount that is non-negative and also less than the width of the unsigned type.',
    'answers': ['defined for all values of x', 'defined for some values of x', 'defined for no values of x'],
    'correct': [1]
}, {
    'question': '\nAssume x has type\xa0 <tt>unsigned short</tt> . Is the expression\xa0 <tt>x&lt;&lt;31</tt> ...',
    'explanation': "This one was just to make sure you've been paying attention. Since unsigned short is promoted to int, it is illegal to shift a 1 bit into or past the sign bit. If we shifted the value by 15\n or fewer positions, the result would be defined for all values that can be stored in an unsigned short.",
    'answers': ['defined for all values of x', 'defined for some values of x', 'defined for no values of x'],
    'correct': [2]
}, {
    'question': '\nAssume x has type\xa0 <tt>int</tt> . Is the expression\xa0 <tt>x + 1</tt> ...',
    'explanation': 'Evaluating this expression is an undefined behavior iff x is INT_MAX.',
    'answers': ['defined for all values of x', 'defined for some values of x', 'defined for no values of x'],
    'correct': [2]
}, {
    'question': '\nAssume x has type\xa0 <tt>int</tt> . Is the expression\xa0 <tt>x - 1 + 1</tt> ...',
    'explanation': "Since C's additive operators are left-associative, this expression is undefined iff x is INT_MIN. If these operators were right-associative, the expression would be defined for all values of\n x.",
    'answers': ['defined for all values of x', 'defined for some values of x', 'defined for no values of x'],
    'correct': [2]
}, {
    'question': '\nAssume x has type\xa0 <tt>int</tt> . Is the expression\xa0 <tt>(short)x + 1</tt> ...',
    'explanation': 'Any value of type int, after being truncated to short and then promoted back to int, can be safely incremented as long as the int type is wider than the short type.',
    'answers': ['defined for all values of x', 'defined for some values of x', 'defined for no values of x'],
    'correct': [1]
}, {
    'question': '\nAssume x has type\xa0 <tt>int</tt> . Is the expression\xa0 <tt>(short)(x + 1)</tt> ...',
    'explanation': 'Ok, that was an easy one. Of course the cast to short occurs too late to prevent the undefined behavior.',
    'answers': ['defined for all values of x', 'defined for some values of x', 'defined for no values of x'],
    'correct': [2]
}, {
    'question': '\nDoes evaluating the expression\xa0 <tt>INT_MIN % -1</tt> \xa0invoke undefined behavior?',
    'explanation': "A bug in the original quiz software prevented creating two correct answers for this question. But here's the explanation: This construct is widely treated as undefined by real C compilers because\n making it well-defined would reduce performance of generated code. My reading of the C99 standard is that it is not undefined. YMMV.",
    'answers': ['who knows'],
    'correct': []
}]
