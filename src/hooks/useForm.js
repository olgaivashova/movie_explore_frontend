import { useState } from "react";

export default function useForm() {
  const [search, setSearch] = useState("");
  const [isSwitched, setIsSwitched] = useState(false);

  function handleChange(e) {
    setSearch(() => (e.target.value))
  }

  function handleCheckboxChange(e) {
    setIsSwitched(() => (e.target.checked))
  }

  return {search, isSwitched, handleChange, handleCheckboxChange, setSearch, setIsSwitched}
}
