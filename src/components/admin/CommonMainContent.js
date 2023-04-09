import React from 'react'
import DonutChart from 'react-donut-chart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Scatter } from 'react-chartjs-2';
  import faker from 'faker';


export function Donut() {
  return (
    <div>
    <h5 style={{textAlign:"start"}}>Views Distribution</h5>
    <DonutChart
  data={[
    {
      label: 'Originals',
      value: 25,
    },
    {
      label: 'Comedy',
      value: 10,
    },
    {
      label: 'Popular',
      value: 5,
    },
    {
      label: 'Action',
      value: 25,
    },
    {
        label:'Toprated',
        value:35
    }
  ]}
  height={230}
  width={300}

/>
    </div>
  )
}

export function Tables(){
    function createData(category, Views, Likes, Duration) {
        return { category, Views, Likes, Duration };
      }
      
      const rows = [
        createData('Originals', 3746, 752, 1929),
        createData('Comedy', 8126, 728, 1763),
        createData('Action', 8836, 694, 1628),
        createData('Top rated', 2739, 539, 1237),
      ];

      return (
        <div>
        <h5 style={{textAlign:"start"}}>Table Analysis</h5>
        <TableContainer>
          <Table style={{textAlign:"start"}} size="medium">
            <TableHead style={{backgroundColor:"#F5F6FA",color:"#B7BAC5"}}>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell align="left">Views</TableCell>
                <TableCell align="left">Likes</TableCell>
                <TableCell align="left">Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row,index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.category}
                  </TableCell>
                  <TableCell align="left">{row.Views}</TableCell>
                  <TableCell align="left">{row.Likes}</TableCell>
                  <TableCell align="left">{row.Duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      );
}


//scatter chart
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'A dataset',
      data: Array.from({ length: 100 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
      })),
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

export function Scatters(){

    return <Scatter options={options} data={data} />;
}