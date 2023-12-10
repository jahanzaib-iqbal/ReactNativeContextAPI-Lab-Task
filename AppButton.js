import React from "react";
import {TouchableOpacity,Text} from 'react-native';

export const AppButton = ({btnTitle, btnBgColor, textColor, btnTextSize, btnPress, btnPadding})=>(

    <TouchableOpacity style={{backgroundColor:btnBgColor  }} onPress={btnPress}>

        <Text style={{color:textColor, fontSize:btnTextSize, padding: btnPadding}}>
            {btnTitle}
        </Text>

    </TouchableOpacity>
)
