import "./App.css";
import { Divider, FormControl, FormLabel, Input, Select } from "@mui/joy";
import React from "react";

function App() {
  const [currency, setCurrency] = React.useState("dollar");

  return (
    <form>
      <FormControl>
        <FormLabel>Arbitrary Label</FormLabel>
        <Input
          placeholder="Amount"
          startDecorator={{ dollar: "$", baht: "฿", yen: "¥" }[currency]}
          endDecorator={
            <React.Fragment>
              <Divider orientation="vertical" />
              <Select
                variant="plain"
                value={currency}
                onChange={(_, value) => setCurrency(value!)}
                slotProps={{
                  listbox: {
                    variant: "outlined",
                  },
                }}
                sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
              >
                <option value="dollar">US dollar</option>
                <option value="baht">Thai baht</option>
                <option value="yen">Japanese yen</option>
              </Select>
            </React.Fragment>
          }
          sx={{ width: 300 }}
        />
      </FormControl>
    </form>
  );
}

export default App;
