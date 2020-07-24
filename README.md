# useEffect
副作用のためのフックであり、関数コンポーネント内で副作用を実行することを可能にする。  
Reactコンポーネントの内部から、外部データの取得や購読 (subscription)、あるいはDOM更新を行う場合  
これらの操作は他のコンポーネントに影響することがあり、またレンダーの最中に実行することができない。  
このような操作を “副作用 (side-effects)“という。  

# useContext
「状態」と「状態を変更するメソッド」をpropsを用いずに  
アプリケーション全体で取り回せるようにするフック。  
useContext に渡す引数はコンテクストオブジェクト自体である。  

# useReducer
useStateに代替する状態管理用のフック。  
扱うステートの型について、useStateがNumber, String, Booleanのシンプルな型を扱うのに向いている。    
それに対して、useReducerはObject, Arrayなどの更新に利用するのに向いている。  
複数のstateを扱う場合は可読性の面でもuseReducerを使うのが良い。  
