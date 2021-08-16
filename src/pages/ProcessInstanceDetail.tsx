import React, {useState, useEffect} from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import TopMenu from '../components/TopMenu';
import CamundaService from '../services/camunda.service';
import {
  useParams,
  useHistory
} from "react-router-dom";

interface ProcessInstanceDetailURLParams {
  id: string;
  order: string;
}; 

export default function ProcessInstanceDetail(){
  const [activityList, setActivityList] = useState([]);

  const history = useHistory();

  const { id, order } = useParams<ProcessInstanceDetailURLParams>();

  useEffect(() => {
    const getActivityList = async (processInstanceId: string) => {
      const resActivityList:any = await CamundaService.getActivityList(processInstanceId);
      console.log(resActivityList);
      setActivityList(resActivityList);
    }

    console.log(id);
    getActivityList(id);

  }, []);

  return (
    <>
      <TopMenu />
      <Container>
        <Row>
          <Col style={{display: 'flex', justifyContent: 'space-between', marginBottom: 20}}>
            <h2>Business Key: {order}</h2>
            <Button  onClick={() => history.goBack()}>Back</Button>
          </Col>
        </Row>
        <Row>
          <Col><h2>Activities</h2></Col>
        </Row>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Activity</th>
              <th>Start</th>
              <th>End</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {activityList.map((item:any) => {
              return (
                <tr key={item.id}>
                  <td>{item.activityId}</td>
                  <td>{item.activityName}</td>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
                  <td style={{textAlign: 'right'}}>{item.durationInMillis/1000}s</td>
                </tr>
              )
            })}
            
          </tbody>
        </Table>
      </Container>
    </>
  )
}