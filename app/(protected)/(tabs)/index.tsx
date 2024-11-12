import { SearchInput } from "@/components/SearchInput";
import Wrapper from "@/components/ui/Wrapper";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Home() {
  const [value,setValue] = useState('')

  const onClear = () => setValue('')

  const onChange = (value: string) => {
    setValue(value);
  };
  return <Wrapper>
    <SearchInput onChange={onChange} value={value}  onClear={onClear}/>
  </Wrapper>
  
}
