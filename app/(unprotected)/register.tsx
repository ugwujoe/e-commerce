import CustomInput from "@/components/form/CustomInput";
import { useState } from "react";
import { Text, View , StyleSheet, TextInput} from "react-native";
import { validateEmail, validatePassword } from "@/utils";
import { Link } from "expo-router";
import { LoginForm } from "@/components/form/LoginForm";
import Wrapper from "@/components/ui/Wrapper";
import Title from "@/components/ui/Title";


export default function register () {
    return (
        <Wrapper>
            <Title title="Welcome"/>
            <LoginForm register/>
        </Wrapper>
    )
}  