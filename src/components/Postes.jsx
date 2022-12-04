import React from "react";
import {memo} from "react"
import { Table } from "react-bootstrap";
// Loader 
import { MutatingDots } from "react-loader-spinner";
import PostsItems from "./PostsItems";



const Postes = ({ records, loading, error , deleteRecord}) => {

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MutatingDots
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : error ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MutatingDots
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th style={{ width: "20%" }}>Title</th>
              <th style={{ width: "50%" }}>Dis</th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            <PostsItems deleteRecord={deleteRecord} records={records} />
          </tbody>
        </Table>
      )}
    </>
  );
};

export default memo(Postes);
