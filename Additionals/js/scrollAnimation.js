const observer = new IntersectionObserver((entries) => {
    // create intersection observer, a class that takes a call back function in its constractor.
    // It can observe multiple elements or entries at the same time.
    entries.forEach((entry) => {
        // This function will run anytime the visibillity of one of the observed elements changes
        // Because it handles multiple entries we'll need to use 'forEach to 'loop over them.
        console.log(entry)
        if(entry.isIntersecting){
            // Then we can run conditional check to find out if that entry is intersecting the viewport or not.
            entry.target.classList.add('show');
            // If it is intersecting wi'll add a class 'show' to make it visible.
        }else{
            entry.target.classList.remove('show');
            // To show it multiple times we need to remove the class show when it is not intersecting.
        }

    });
});


const hiddenElement = document.querySelectorAll('.hidden');
// grab all the elements of the 'hidden' class
hiddenElement.forEach((el) => observer.observe(el));
// Telling the observer what to observe.
//Looping over all of the hidden elements and telling the observer to observe each on of them.







const observer1 = new IntersectionObserver((entries) => {
    // create intersection observer, a class that takes a call back function in its constractor.
    // It can observe multiple elements or entries at the same time.
    entries.forEach((entry) => {
        // This function will run anytime the visibillity of one of the observed elements changes
        // Because it handles multiple entries we'll need to use 'forEach to 'loop over them.
        console.log(entry)
        if(entry.isIntersecting){
            // Then we can run conditional check to find out if that entry is intersecting the viewport or not.
            entry.target.classList.add('show1');
            // If it is intersecting wi'll add a class 'show' to make it visible.
        }else{
            entry.target.classList.remove('show1');
            // To show it multiple times we need to remove the class show when it is not intersecting.
        }

    });
});


const hiddenElement1 = document.querySelectorAll('.text');
// grab all the elements of the 'hidden' class
hiddenElement1.forEach((el) => observer1.observe(el));
// Telling the observer what to observe.
//Looping over all of the hidden elements and telling the observer to observe each on of them.


const hiddenElement2 = document.querySelectorAll('.text2');
// grab all the elements of the 'hidden' class
hiddenElement2.forEach((el) => observer1.observe(el));
// Telling the observer what to observe.
//Looping over all of the hidden elements and telling the observer to observe each on of them.
