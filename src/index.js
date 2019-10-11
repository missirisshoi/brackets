module.exports = function check(str, bracketsConfig) {
  // записываем в line входящую str, с помощью цикла добавляем содержимое bracketsConfig
  let line = str;
  for (var i=0; i<bracketsConfig.length; i++) {
    line += bracketsConfig[i];
  }

  // убираем лишние символы
  let line2 = '';
  for (var k=0; k<line.length; k++) {
    if ( line[k] != " " && line[k] != "," && line[k] != "'" ) {
      line2 += line[k];
    }
  }

  // задаем регулярное выражение с правильными сочетаниями открывающих и закрывающих скобок/символов
  let regexp = /\(\)|\[\]|\{\}|\|\||[1][2]|[3][4]|[5][6]|[7][7]|[8][8]/;

  // если два стоящих рядом символа входят в регулярное выражение, вырезаем их из строки
  for (var j=0; j<line2.length; j++) {
    let rs = line2[j] + line2[j+1];
    if (regexp.test(rs)) {
      line2 = line2.replace(rs, "");
      j -=2;
    }
  }

  // выводим результат
  if (line2.length>0) {
    return false;
  }
  else {
    return true;
  }
}
