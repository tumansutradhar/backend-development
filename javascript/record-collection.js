var students = {
    101: {
        name: "Tuman",
        age: 22,
        course: "IT",
        skills: ["HTML", "CSS"]
    },
    102: {
        name: "Bunny",
        age: 4,
        course: "Kindergarten",
        skills: []
    },
    103: {
        name: "Bishal",
        age: 21
    }
};

function updateStudent(id, prop, value) {
    if (value === "") {
        delete students[id][prop];
    } else if (prop === "skills") {
        students[id][prop] = students[id][prop] || [];
        students[id][prop].push(value);
    } else {
        students[id][prop] = value;
    }

    return students;
}

console.log(updateStudent(101, "skills", "JavaScript"));
console.log(updateStudent(103, "course", "Computer Science"));
