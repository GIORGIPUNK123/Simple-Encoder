const app = require('express')();
const cors = require('cors');
const port = 3000;
app.use(cors());

//  *_* = a,
//  )-( = b,
//  -)) = c,
//  _() = d,
//  __* = e,
//  ^_^ = f,
//  (-) =g,
//  +__ = h,
//  !_! = i,
//  *+& = j,
//  ^^_ =k,
//  ^_< = l,
//  __( = m,
//  )__ = n,
//  <>- = o,
//  *() = p,
//  .>< = q,
//   )() = r,
//  &_* =  s,
//  (+) = t,
//  *$+ = u,
//  )*& = v,
//  #$_ = w,
//  (+* = x,
//  ^&_ = y,
//  _*_ = z

let encoded = '';

function encoding(needsToEncode) {
  for (let i = 0; i < needsToEncode.length; i++) {
    if (needsToEncode[i] == ' ') {
      encoded += '$@!';
    }
    if (needsToEncode[i] == 'a') {
      encoded += '*_*';
    }
    if (needsToEncode[i] == 'b') {
      encoded += ')-(';
    }
    if (needsToEncode[i] == 'c') {
      encoded += '-))';
    }
    if (needsToEncode[i] == 'd') {
      encoded += '_()';
    }
    if (needsToEncode[i] == 'e') {
      encoded += '__*';
    }
    if (needsToEncode[i] == 'f') {
      encoded += '^_^';
    }
    if (needsToEncode[i] == 'g') {
      encoded += '(-)';
    }
    if (needsToEncode[i] == 'h') {
      encoded += '+__';
    }
    if (needsToEncode[i] == 'i') {
      encoded += '!_!';
    }
    if (needsToEncode[i] == 'j') {
      encoded += '*+&';
    }
    if (needsToEncode[i] == 'k') {
      encoded += '^^_';
    }
    if (needsToEncode[i] == 'l') {
      encoded += '^_<';
    }
    if (needsToEncode[i] == 'm') {
      encoded += '__(';
    }
    if (needsToEncode[i] == 'n') {
      encoded += ')__';
    }
    if (needsToEncode[i] == 'o') {
      encoded += '<>-';
    }
    if (needsToEncode[i] == 'p') {
      encoded += ')__';
    }
    if (needsToEncode[i] == 'q') {
      encoded += '.><';
    }
    if (needsToEncode[i] == 'r') {
      encoded += ')()';
    }
    if (needsToEncode[i] == 's') {
      encoded += '&_*';
    }
    if (needsToEncode[i] == 't') {
      encoded += '(+)';
    }
    if (needsToEncode[i] == 'u') {
      encoded += '*$+';
    }
    if (needsToEncode[i] == 'v') {
      encoded += ')*&';
    }
    if (needsToEncode[i] == 'w') {
      encoded += '#$_';
    }
    if (needsToEncode[i] == 'x') {
      encoded += '(+*';
    }
    if (needsToEncode[i] == 'y') {
      encoded += '^&_';
    }
    if (needsToEncode[i] == 'z') {
      encoded += '_*_';
    }
  }
}

let decoded = '';
function decoding(needsToDecode) {
  let elements = [];
  for (let i = 0; i < needsToDecode.length / 3; i++) {
    elements[i] = needsToDecode.slice(i * 3, i * 3 + 3);
    if (elements[i] == '$@!') {
      decoded += ' ';
    }
    if (elements[i] == '*_*') {
      decoded += 'a';
    }
    if (elements[i] == ')-(') {
      decoded += 'b';
    }
    if (elements[i] == '-))') {
      decoded += 'c';
    }
    if (elements[i] == '_()') {
      decoded += 'd';
    }
    if (elements[i] == '__*') {
      decoded += 'e';
    }
    if (elements[i] == '^_^') {
      decoded += 'f';
    }
    if (elements[i] == '(-)') {
      decoded += 'g';
    }
    if (elements[i] == '+__') {
      decoded += 'h';
    }
    if (elements[i] == '!_!') {
      decoded += 'i';
    }
    if (elements[i] == '*+&') {
      decoded += 'j';
    }
    if (elements[i] == '^^_') {
      decoded += 'k';
    }
    if (elements[i] == '^_<') {
      decoded += 'l';
    }
    if (elements[i] == '__(') {
      decoded += 'm';
    }
    if (elements[i] == ')__') {
      decoded += 'n';
    }
    if (elements[i] == '<>-') {
      decoded += 'o';
    }
    if (elements[i] == '*()') {
      decoded += 'p';
    }
    if (elements[i] == '.><') {
      decoded += 'q';
    }
    if (elements[i] == ')()') {
      decoded += 'r';
    }
    if (elements[i] == '&_*') {
      decoded += 's';
    }
    if (elements[i] == '(+)') {
      decoded += 't';
    }
    if (elements[i] == '*$+') {
      decoded += 'u';
    }
    if (elements[i] == ')*&') {
      decoded += 'v';
    }
    if (elements[i] == '#$_') {
      decoded += 'w';
    }
    if (elements[i] == '(+*') {
      decoded += 'x';
    }
    if (elements[i] == '^&_') {
      decoded += 'y';
    }
    if (elements[i] == '_*_') {
      decoded += 'z';
    }
  }
}

// decoding();

app.post('/encrypt', (req, res) => {
  req.on('data', (data) => {
    const readable = data.toString();
    encoding(readable.toLocaleLowerCase());
    res.send(encoded);
    encoded = '';
  });
});
app.listen(process.env.PORT)

app.post('/decrypt', (req, res) => {
  req.on('data', (data) => {
    const readable = data.toString();
    decoding(readable.toLocaleLowerCase());
    res.send(decoded);
    decoded = '';
  });
});
app.get('/', (req,res) => { res.send("WORKS") })
