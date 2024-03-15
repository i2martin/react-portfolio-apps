import React, { useRef } from "react";
import Button from "./Button";

const defaultFields = [['','',''],['','',''],['','','']];


function TicTacToe()
{
    var player1 = useRef("Player 1");
    var player2 = useRef("Player 2");
    var [currentlyPlaying, setCurrentlyPlaying] = React.useState("X");
    var [occupiedFields, setOccupiedFields] = React.useState(defaultFields);
    var [playerOneScore, setPlayerOneScore] = React.useState(0);
    var [playerTwoScore, setPlayerTwoScore] = React.useState(0);
    var [playerTurn, setPlayerTurn] = React.useState(1);
    var [numberOfPlayedFields, setNumberOfPlayedFields] = React.useState(1);
    function placeMark(col,row)
    {
        var newScore = 0;
        var temp = numberOfPlayedFields + 1;
        setNumberOfPlayedFields(temp);
        //create a deep copy of occupiedFields
        var copyFields = occupiedFields.map(innerArray => [...innerArray]);
        if (copyFields[row][col] !== "X" && copyFields[row][col] !== "O" )       
        {
            copyFields[row][col] = currentlyPlaying;

            if (checkWinner(copyFields) === false && numberOfPlayedFields !== 9)
            {
                setOccupiedFields(copyFields);
                //switch marks on update
                setCurrentlyPlaying(currentlyPlaying === "X" ? "O" : "X");
                setPlayerTurn(playerTurn === 1 ? 0 : 1);
            }

            else
            {         
                console.log(123);
                var newFields = defaultFields;
                if (playerTurn === 1)
                {
                    newScore = playerOneScore + 1;
                    if (numberOfPlayedFields !== 9) {
                        console.log(currentlyPlaying);
                        setPlayerOneScore(newScore);
                    }
                }
                else
                {
                    newScore = playerTwoScore + 1;
                    if (numberOfPlayedFields !== 9) {setPlayerTwoScore(newScore);}
                    
                }
                setOccupiedFields(newFields);
                setCurrentlyPlaying('X');
                setNumberOfPlayedFields(1);
            }
        }
    }
    
    function checkWinner(fields)
    {
        for (let i = 0; i < fields.length; i++) {
                //check rows
                if (fields[i][0] === fields[i][1] && fields[i][1] === fields[i][2] && fields[i][0] !== '')
                {
                    return true;
                    
                }
                //check columns
                if(fields[0][i] === fields[1][i] && fields[1][i] === fields[2][i] && fields[2][i] !== '')
                {
                    return true;
                }           
            }
        //check diagonals
        if (fields[0][0] === fields[1][1] && fields[1][1] === fields[2][2] && fields[0][0] !== '')
        {
            return true;
        }
        else if (fields[0][2] === fields[1][1] && fields[1][1] === fields[2][0] && fields[0][2] !== '')
        {
            return true;
        }
            
        return false;
    }
    const handleNameLength = (e) =>
    {
        //Update this as now name can be left blank
        if (player1.current?.textContent?.length >= 15 || player2.current?.textContent?.length >= 15 )
        {
            if (e.keyCode !== 8)
            {
                e.preventDefault();
            }
        }
        
    }

    return (
        <div className="ttt-container">
            <h1 className="ttt-title">Tic Tac Toe</h1>
            <div className="scores">
                <div className="score">
                    <h2 ref={player1} onKeyDown={handleNameLength} contentEditable="plaintext-only">Player 1: </h2> 
                    <h2>{playerOneScore}</h2>
                </div>
                <div className="score">
                   <h2 ref={player2} onKeyDown={handleNameLength} contentEditable="plaintext-only">Player 2: </h2>
                   <h2>{playerTwoScore}</h2>
                </div>
            </div>
            {[...occupiedFields].map((array, index)=>
            {
                return(
                <Button row={array} rowId={index} clicked={placeMark} currentSymbol={currentlyPlaying} key={index++}/>
                )
            })}
        </div>     
    );
}

export default TicTacToe;