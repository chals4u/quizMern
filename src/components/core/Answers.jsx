import React, {Component} from 'react';
//let answerArr = [];
class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
            classNames: ['', '', '', '']
            // answerArr,
            // answer1:'',
            // correct:'',
        }
        this.checkAnswer = this.checkAnswer.bind(this);
        this.clearClasses = this.clearClasses.bind(this);
    }
    // componentWillReceiveProps(nextProps) {
    //     const answerList = Object.entries(nextProps).map(([key,value])=>{
    //         if(key=='correct')
    //         {
    //             this.setState({correct: value})
    //         }
    //         if(key=='answers')
    //         {
    //             value.map(function(item, i){
                   
    //                  answerArr.push(item);
                     
    //             })
    //             this.setState({ answerArr });
    //         }
    //       })
    // }
    checkAnswer(e) {
        let { isAnswered } = this.props;
        if(!isAnswered) {
            let elem = e.currentTarget;
            let { correct, increaseScore } = this.props;
            let answer = Number(elem.dataset.id);
            let updatedClassNames = this.state.classNames;

            if(answer === correct){
                updatedClassNames[answer-1] = 'right';
                increaseScore();
            }
            else {
                updatedClassNames[answer-1] = 'wrong';
            }
            
            this.setState({
                classNames: updatedClassNames,
                
            })

            this.props.showButton();       
            var myTime = setTimeout(() => {
                this.clearClasses();
                //console.log("IN SET Timeout")
            }, 5000);
        }
    }
    clearClasses(){
        this.setState({
            classNames: ['', '', '', '']
        })
        
    }
    render() {
        // var answers  = this.props;
        let { classNames } = this.state;
        let transition = {
            transitionName: "example",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 300
        }
        
        if (typeof this.props.answers !== 'undefined') {
            console.log('jjj');
        console.log(this.props.answers[0]);
        
          }
        // if(this.props.answers)
        // {const {answers} = this.props.answers;
        // console.log('Object.keys ', Object.keys(answers));}
        // Object.keys(flags).forEach(key => {
        //     console.log('key => ', key);
        //     console.log('value => ', ''+ flags[key]);
        //     allflags.push(<div>{key} : {''+ flags[key]}</div>);
        //   });
        //  console.log('Home Props flags', flags);
        //   console.log('displayWallet >>>>>>>>> ', ''+flags['displayWallet']);
        
        
       
        return (
            
            <div id="answers">
                
                { typeof this.props.answers !== 'undefined' ?
                    (<ul><li onClick={this.checkAnswer} 
                        className={classNames[0]} data-id="1">
                    <span>A</span> 
                    <p>{this.props.answers[0]}</p></li>
                    <li onClick={this.checkAnswer} 
                    className={classNames[1]} data-id="2">
                <span>B</span> 
                <p>{this.props.answers[1]}</p></li>

                <li onClick={this.checkAnswer} 
                    className={classNames[2]} data-id="3">
                <span>C</span> 
                <p>{this.props.answers[2]}</p></li>

                <li onClick={this.checkAnswer} 
                    className={classNames[3]} data-id="4">
                <span>D</span> 
                <p>{this.props.answers[3]}</p></li></ul>)
                    :''
                }
                
                     
                
            </div>
        );
    }
}

export default Answers