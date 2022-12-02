import React from 'react';
import axios from "axios";
import { useState } from "react";
import { FormLabel, Input, Button, VStack,Stack} from '@chakra-ui/react';
// import SaveButton from '../molecules/SaveButton';


export default function App() {

  const [imageUrl, setImageUrl] = useState("");
  const [a_name, setA_name] = useState("");
  const [st_name, setSt_name] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const fetchImage = async () => {
    const data = {a_name: a_name, st_name: st_name, start: start, end: end}
    const res = await axios.post("http://localhost:8000/api5", data);
    setImageUrl(res.data.path);
  };

  const  resetImage = async () => {
    setImageUrl("");
  }

  const changeA_name = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA_name(event.target.value);
  }
  const changeSt_name = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSt_name(event.target.value);
  }
  const changeStart = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStart(event.target.value);
  }
  const changeEnd = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnd(event.target.value);
  }

  const[value, setValue] = useState();

  const fetchImage2= async () => {
    const res = await axios.get("http://localhost:8000/download/{name}");
    setValue(res.data.path2);
  };

  return (
    <VStack>
      <VStack w="30vw">
        <FormLabel htmlFor="area_name">Prefecture name</FormLabel>
        <Input id="area_name" value={a_name} onChange={changeA_name} placeholder="東京都" />

        <FormLabel htmlFor="station_name">City name</FormLabel>
        <Input id="station_name" value={st_name} onChange={changeSt_name} placeholder="東京"  />

        <FormLabel htmlFor="startmonth">Start year</FormLabel>
        <Input id="startmonth" value={start} onChange={changeStart} placeholder="202204" />

        <FormLabel htmlFor="endmonth">End year</FormLabel>
        <Input id="endmonth" value={end} onChange={changeEnd} placeholder="202211"  />
        <Stack>
          <Button mt={4} colorScheme="teal"  onClick={() => fetchImage()}>
            Submit
          </Button>
          {imageUrl ? <div><img src={imageUrl} alt="ame4" /></div> : <div></div>}
          <Button mt={4} colorScheme="teal"  onClick={() => resetImage()}>
            Reset
          </Button>
          <Button mt={4} colorScheme="teal"  onClick={() => resetImage()}>
            Reset
          </Button>
        </Stack>
      </VStack>
    </VStack>

  )
}
