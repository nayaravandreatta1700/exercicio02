const students = [
    {
        name : "João",
        n1 : 9.5,
        n2 : 10
    },
    {
        name : "Maria",
        n1 : 8,
        n2 : 8
    },
    {
        name : "Cecília",
        n1 : 5,
        n2 : 9
    },
    {
        name : "Felipe",
        n1 : 2.5,
        n2 : 6
    }
]



function media(n1,n2){
    return ((n1 + n2) / 2)
}

function printMedia(student){
    const studentMedia = media(student.n1,student.n2)

    if (studentMedia >= 7){
    return `A média do(a) aluno(a) ${student.name} é: ${studentMedia}.
    Parabéns, ${student.name}! você foi aprovado(a) no concurso!`
}else{
    return `A média do(a) aluno(a) ${student.name} é: ${studentMedia}.
    Não foi dessa vez ${student.name}! Tente novamente!`
}
}


for (let student of students){
    let mediaMessage = printMedia(student)
    alert(mediaMessage)
}



