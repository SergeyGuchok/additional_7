module.exports = function solveSudoku(matrix) {
	let a = 0, b = 0;
	for(let i = 0; i<9; i++){
		for(let j = 0; j<9;j++){
			let c = 1;
			if(matrix[i][j]==0){
				while(matrix[i][j]!=c){
					if(i<3) { a = 0 }
						else if(i<6){ a = 3 }
							else { a = 6 }
					if(j<3) { b = 0 }
						else if(j<6){ b = 3 }
							else { b = 6 }
					if(checkMatrix(a,b,c)&&checkCol(j,c)&&checkRow(i,c)){
						matrix[i][j] = c;
					}
					else{
						c++;
					}
				}
			}
		}
	}
	return matrix;


	function checkMatrix(a,b,c){
		for(let i = a; i<a+3; i++){
			for(let j = b; j<b+3; j++){
				if(matrix[i][j]==c) return false;
			}
		}
		return true;
	}
	function checkCol(j,c){
		for(let i = 0; i<9; i++){
			if(matrix[i][j]==c) return false;
		}
		return true;
	}
	function checkRow(i,c){
		for(let j = 0; j<9; j++){
			if(matrix[i][j]==c) return false;
		}
		return true;
	}
}
