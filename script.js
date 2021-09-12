
document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.type', {
        strings: ["Hi, I'm"],
        stringsElement: null,
		// typing speed
		typeSpeed: 80,
		// time before typing starts
		startDelay: 600,
		
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
      });
  });
