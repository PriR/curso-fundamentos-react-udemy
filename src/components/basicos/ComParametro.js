export default function ComParametro({titulo, aluno, nota}) {
    const status = nota >= 7 ? 'Aprovado' : 'Recuperação';
    return (
        <div>
            <h2>{titulo}</h2>
            <p>
                <strong>{aluno} </strong> 
                tem nota 
                <strong> {nota} </strong>
                e está 
                <strong> {status}</strong>!
            </p>
        </div>
    )
}