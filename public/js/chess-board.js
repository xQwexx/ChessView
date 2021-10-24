class Figure{
  color
  imgPath
  constructor(char) {
    if(char.toUpperCase() == char){
      this.imgPath = "W" + char.toLowerCase() + ".svg"
    }
    else{
      this.imgPath = "B" + char.toLowerCase() + ".svg"
    }
  }
  render(){
    return `<img src="svg/${this.imgPath}" alt="">`
  }

}

class ChessCell{
  constructor(id, figure = null) {
    this.id = id;
    this.figure = figure;
  }
  render(){
    var figureData = this.figure != null ? this.figure.render() : "&nbsp;";
    return `<div id="chess-cell-${this.id}" class="chess-cell">
    ${figureData}
    </div>
    `;
  }
}

class ChessRow{
  cells = [];
  constructor(fenRow) {
    var cellIndex = 1;
    for(var char of fenRow)
    {
      if (char >= '1' && char <= '9')
      {
        for (let index = 0; index < char - '0'; index++) {
          this.cells.push(new ChessCell(cellIndex++))
        }
      }
      else{
        this.cells.push(new ChessCell(cellIndex++, new Figure(char)))
      }
    }
  }

  render(){
    var rowData = this.cells.map(val => val.render()).join('');

    return `<div class="chess-row d-inline-flex w-100">
      ${rowData}
    </div>
    `;
  }
}

class ChessBoard{
    rows = [];
    constructor(fen) {
      fen.split('/').forEach(line => {
        this.rows.push(new ChessRow(line));
      });
    }
    genDivs(number, firstChar, classes){
      var divs = "";
      for (let index = 0; index < number; index++) {
        divs += `<div class="${classes}">${String.fromCharCode(firstChar.charCodeAt(0)+index)}
        </div>`
      }
      return divs;
    }

    render(){
      var tableData = this.rows.map(val => val.render()).join('');

      return `
      <div id="full-chess-board">
        <div class="d-inline-flex w-100">
          <div class="flex-column-reverse">
          ${this.genDivs(8, '1', "chess-label-left")}
          </div>
          <div id="chess-board" class="flex-column p-2">
            ${tableData}
          </div>
        </div>
        <div class="flex-row w-100  d-flex ">
          <div class="p-2">
          </div>
          ${this.genDivs(8, 'A', "chess-label-bottom p-2")}
        </div>
      </div>
      `;
    }
}

$().ready(function() {
  var canvas = $("#chess-board-space");
  //console.log(canvas.attr('value'));
  var board = new ChessBoard(canvas.attr('value'));
  canvas.append($(board.render()));
  var button = $("#newfen-button");
  button.click(function(){
    window.location.href = "/rand";
  });
})