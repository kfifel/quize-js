
export class Question {
    private _question? : string;
    private _choices?  : string[];
    private _answers?  : number[];

    public constructor(question : string, choices: string[] , answers: number[]) {
        this._question = question;
        this._choices = choices;
        this._answers = answers;
    }

    public get question(): string {
        return this._question;
    }

    public set question(value: string) {
        this._question = value;
    }

    public get choices(): string[] {
        return this._choices;
    }

    public set choices(value: string[]) {
        this._choices = value;
    }

    public get answers(): number[] {
        return this._answers;
    }

    public set answers(value: number[]) {
        this._answers = value;
    }
    public getAllData(){
        fetch("../data/Question.json").then((res)=> console.log(res));
    }
}