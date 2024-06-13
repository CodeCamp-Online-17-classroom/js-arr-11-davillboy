// write code here
        const person = ['John', 'Jay', 'Jim', 'Jame'];
        const jayIndex = person.indexOf('Jay');

        if (jayIndex !== -1) {
        person.splice(jayIndex, 1);
        
        person.push('Jack', 'Joe');
        }

        console.log(person); // ["John", "Jim", "Jame", "Jack", "Joe"]
