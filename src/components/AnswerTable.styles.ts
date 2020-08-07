import styled from 'styled-components';

export const AnswerWrapper = styled.div`
  thead,
  tfoot {
    background-color: #3f87a6;
  }

  caption {
    padding: 10px;
    caption-side: bottom;
  }

  table {
    border-collapse: collapse;
    font-size: 1rem;
    color: #fff;
    box-shadow: 1px 2px 0px rgba(0,0,0,0.1);
  }

  td,
  th {
    padding: 10px;
    text-align: left;
    margin: 0;
  }

  th {
    position: stick;
    top: 0;
    background-color: #333;
    color: #fff;
  }
  .question {
    text-align: left;
  }

  tr.correct {
    background: linear-gradient(90deg, #56ffa4, #59bc86);
  }

  tr.wrong {
    background: linear-gradient(90deg, #ff5656, #c16868);
  }

`;

