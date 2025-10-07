//interface

interface IEmployee {
    id : number;
    name : string;
    salary : number;
    gender : string;
}


// TYPE

type TGender = "MALE" | "FEMALE";

type TTeacher = {
    id: number;
    name: string;
    topic: string;
    gender: TGender;
};

const teacher: TTeacher ={
    id : 1,
    name : "Herman",
    topic : "Bahasa",
    gender : "MALE"
}