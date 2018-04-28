import React from 'react';
import { Container, Jumbotron, Row } from 'reactstrap';
import Chart from '../../components/Chart';
// import pie from 'val-loader!../../utils/improved_pie_chart'; // eslint-disable-line

const HCIM = () => (
  <Container fluid>
    <Jumbotron style={{ marginBottom: '1rem' }}>
      <h2>WIP: Explore Hardcore Ironman Deaths (from Runescape)</h2>
      <p className="lead">
        The data this is based on is pulled from the spreadsheet{' '}
        <a href="https://www.reddit.com/user/CaptainP" target="_blank" rel="noopener noreferrer">
          CaptainP
        </a>{' '}
        provided on reddit after his own analyis of his scraped data.
      </p>
      <p>
        This includes over 10.5 thousand HCIM deaths from 18/11/2014 to 2/09/2017.<br />
        If you&apos;re interested, you can view the reddit post and comments {}
        <a
          href="https://www.reddit.com/r/runescape/comments/6y0oit/i_used_an_html_parser_to_pull_all_105k_hcim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>.
      </p>
    </Jumbotron>
    <Row>
      <Chart field="Location" nullValue="Unknown" chartOptions={{ cap: 10, height: 400 }} />
      <Chart field="Death" nullValue="Unknown" chartOptions={{ cap: 10, height: 400 }} />
      <Chart
        field="Skill Total"
        fieldFn={(d) => {
          let totalLevel;
          if (typeof (d['Skill Total']) === 'string') {
            totalLevel = Number(d['Skill Total'].replace(',', ''));
          } else totalLevel = d['Skill Total'];

          if (totalLevel <= 500) return 0;
          else if (totalLevel <= 1000) return 1;
          else if (totalLevel <= 2000) return 2;
          return 3;
        }}
        nullValue="Unknown"
        type="pie"
        chartOptions={{
          cap: 10,
          height: 400,
          minAngleForLabel: 0,
          innerRadius: 100,
          drawPaths: true,
          label: d => ['1 - 500', '501 - 1000', '1001 - 2000', '> 2000'][d.key],
          title: (d) => {
            const label = ['1 - 500', '501 - 1000', '1001 - 2000', '> 2000'][d.key];
            return `${label}: ${d.value}`;
          },
          ordering: d => d.key,
        }}
      />
    </Row>
  </Container>
);

export default HCIM;
