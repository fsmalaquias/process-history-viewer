import React, {useState, useEffect} from 'react';
import { Container, Table } from 'react-bootstrap';
import TopMenu from '../components/TopMenu';
import CamundaService from '../services/camunda.service';
import Utils from "../utils/utils";
import {
  Link
} from "react-router-dom";

export default function ProcessInstanceList(){
  const [processList, setProcessList] = useState([]);

  useEffect(() => {
    const getProcessInstance = async () => {
      const resProcessInstance:any = await CamundaService.getProcessInstance();
      console.log(resProcessInstance);
      setProcessList(resProcessInstance);
    }

    console.log(process.env);

    getProcessInstance();
  }, [])

  return (
    <>
      <TopMenu />
      <Container>
        <h2>Process Instances</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Process Instance ID</th>
              <th>Business Key</th>
              <th>Start</th>
              <th>End</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {processList.map((item:any) => {
              return (
                <tr key={item.id}>
                  <td><Link to={`/${item.id}/${item.businessKey}`}>{item.id}</Link></td>
                  <td>{item.businessKey}</td>
                  <td>{Utils.formatDate(item.startTime)}</td>
                  <td>{Utils.formatDate(item.endTime)}</td>
                  <td style={{textAlign: 'right'}}>{item.durationInMillis/1000}s</td>
                  <td>{item.state}</td>
                </tr>
              )
            })}
            
          </tbody>
        </Table>
      </Container>
    </>
  )
}