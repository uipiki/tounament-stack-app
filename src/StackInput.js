import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function StackInput({ updateData }) {
    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.trim() !== '') {
            const newValue = Number(inputValue); // 数値に変換
        
            // 数値かつ0以上の入力値のみを受け付ける
            if (!isNaN(newValue) && newValue >= 0) {
                e.target.value = ''; // 入力フィールドをリセット
                updateData((prevData) => [...prevData, newValue]); // データを更新
            }
        }
    }

    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            display: 'flex',
            justifyContent: 'center', // 中央に寄せる
          }}
          noValidate
          autoComplete="off"
        >
          <TextField 
            id="outlined-basic" 
            label="" 
            variant="outlined"
            type="number" // これで数値入力を制限
            onBlur={handleChange} // フォーカスが外れたときに処理
            inputProps={{
              min: 0, // 最小値を0に設定
            }}
            sx={{
              backgroundColor: '#fff', // 入力フィールド背景色を白に設定
              borderRadius: '4px', // 角を丸くする
              '& .MuiInputLabel-root': {
                backgroundColor: '#fff', // ラベルの背景色を白に設定
                padding: '0 4px', // ラベルの上下の余白を調整
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#6a4c9c', // 枠線の色を設定（青っぽい紫）
                },
              },
            }}
          />
        </Box>
      );
};

export default StackInput;
