import React from "react";
import styled from "styled-components";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const Wrapper = styled.div`
  #searchbox {
    display: grid;
    width: 70%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    margin: 1rem auto;
    background: #0a4a7f;
    padding: 1.5rem;
  }
`;
export default function Gallery() {
  return (
    <Wrapper>
      <div id="searchbox">
        <div className="field">
          <FormControl style={{ width: "100%" }}>
            <InputLabel
              htmlFor="age-simple"
              style={{ color: "#ccc", fontWeight: "bolder" }}
            >
              Region/City
            </InputLabel>
            <Select
              style={{ color: "#555", background: "#fff", padding: "0.5rem" }}
              value={"Anadol"}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
            >
              <MenuItem value={"Esenyurt"}>Esenyurt</MenuItem>
              <MenuItem value={"Istanbul"}>Istanbul</MenuItem>
              <MenuItem value={"Anadol"}>Anadol</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="field">
          <FormControl style={{ width: "100%" }}>
            <InputLabel
              htmlFor="age-simple"
              style={{ color: "#ccc", fontWeight: "bolder" }}
            >
              Region/City
            </InputLabel>
            <Select
              style={{ color: "#555", background: "#fff", padding: "0.5rem" }}
              value={"Anadol"}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
            >
              <MenuItem value={"Esenyurt"}>Esenyurt</MenuItem>
              <MenuItem value={"Istanbul"}>Istanbul</MenuItem>
              <MenuItem value={"Anadol"}>Anadol</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="field">
          <FormControl style={{ width: "100%" }}>
            <InputLabel
              htmlFor="age-simple"
              style={{ color: "#ccc", fontWeight: "bolder" }}
            >
              Region/City
            </InputLabel>
            <Select
              style={{ color: "#555", background: "#fff", padding: "0.5rem" }}
              value={"Anadol"}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
            >
              <MenuItem value={"Esenyurt"}>Esenyurt</MenuItem>
              <MenuItem value={"Istanbul"}>Istanbul</MenuItem>
              <MenuItem value={"Anadol"}>Anadol</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="field">
          <FormControl style={{ width: "100%" }}>
            <InputLabel
              htmlFor="age-simple"
              style={{ color: "#ccc", fontWeight: "bolder" }}
            >
              Region/City
            </InputLabel>
            <Select
              style={{ color: "#555", background: "#fff", padding: "0.5rem" }}
              value={"Anadol"}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
            >
              <MenuItem value={"Esenyurt"}>Esenyurt</MenuItem>
              <MenuItem value={"Istanbul"}>Istanbul</MenuItem>
              <MenuItem value={"Anadol"}>Anadol</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="field">
          <FormControl style={{ width: "100%" }}>
            <InputLabel
              htmlFor="age-simple"
              style={{ color: "#ccc", fontWeight: "bolder" }}
            >
              Region/City
            </InputLabel>
            <Select
              style={{ color: "#555", background: "#fff", padding: "0.5rem" }}
              value={"Anadol"}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
            >
              <MenuItem value={"Esenyurt"}>Esenyurt</MenuItem>
              <MenuItem value={"Istanbul"}>Istanbul</MenuItem>
              <MenuItem value={"Anadol"}>Anadol</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="field">
          <FormControl style={{ width: "100%" }}>
            <InputLabel
              htmlFor="age-simple"
              style={{ color: "#ccc", fontWeight: "bolder" }}
            >
              Region/City
            </InputLabel>
            <Select
              style={{ color: "#555", background: "#fff", padding: "0.5rem" }}
              value={"Anadol"}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
            >
              <MenuItem value={"Esenyurt"}>Esenyurt</MenuItem>
              <MenuItem value={"Istanbul"}>Istanbul</MenuItem>
              <MenuItem value={"Anadol"}>Anadol</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="field">
          <FormControl style={{ width: "100%" }}>
            <InputLabel
              htmlFor="age-simple"
              style={{ color: "#ccc", fontWeight: "bolder" }}
            >
              Region/City
            </InputLabel>
            <Select
              style={{ color: "#555", background: "#fff", padding: "0.5rem" }}
              value={"Anadol"}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
            >
              <MenuItem value={"Esenyurt"}>Esenyurt</MenuItem>
              <MenuItem value={"Istanbul"}>Istanbul</MenuItem>
              <MenuItem value={"Anadol"}>Anadol</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "100%", height: "100%", background: "#2F80ED" }}
          >
            SEARCH
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
