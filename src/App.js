import './App.css';
import Stundavirs from './Stundasvirs.js';
import StundaPro from './Stunda.js';
import StundaDab from './Stunda2.js';
import StundaSoc from './Stunda3.js';
import StundaKri from './Stunda4';
import StundaMat from './Stunda5';
import StundaLV from './Stunda6';
import StundaSpo from './Stunda7';
import StundaENG from './Stunda8';
import StundaData from './Stunda9';
import StundaKUL from './Stunda10';



function App() {
  return (
    <div className="App">
      <div class="VisaTabula">
    <table class="tabula">
      <Stundavirs />
      <tr height="0">
        <td colspan="5"></td>
      </tr>
      <tbody>
        <tr class="tr1">
          <td>
            <span class="info2">Pārst. </span>
            <b><a>Pirmdiena,  </a></b>
              <a>2023</a>
              <small>.gada </small>
              <b>25.septembris</b>
              <span class="nedruka">
                <span slass="nedruka">        </span>
              </span>
          </td>
        </tr>
        <tr>
          <td valign="top">
          <StundaPro />
          <StundaDab />
          <StundaSoc />
          <StundaKri />
          </td>
        </tr>
      </tbody>
      </table>
      <tr height="0">
        <td colspan="5"></td>
      </tr>
      <table class="tabula">
      <tbody>
        <tr class="tr1">
          <td>
            <span class="info2">Pārst. </span>
            <b><a>Otrdiena,  </a></b>
              <a>2023</a>
              <small>.gada </small>
              <b>26.septembris</b>
              <span class="nedruka">
                <span slass="nedruka">        </span>
              </span>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <StundaMat />
            <StundaSoc />
            <StundaLV />
            <StundaDab />
          </td>
        </tr>
      </tbody>
      </table>
      <tr height="0">
        <td colspan="5"></td>
      </tr>
      <table class="tabula">
      <tbody>
        <tr class="tr1">
          <td>
            <span class="info2">Pārst. </span>
            <b><a>Trešdiena,  </a></b>
              <a>2023</a>
              <small>.gada </small>
              <b>27.septembris</b>
              <span class="nedruka">
                <span slass="nedruka">        </span>
              </span>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <StundaSpo />
            <StundaENG />
            <StundaData />
            <StundaData />
          </td>
        </tr>
      </tbody>
      </table>
      <tr height="0">
        <td colspan="5"></td>
        </tr>
        <table class="tabula">
      <tbody>
        <tr class="tr1">
          <td>
            <span class="info2">Pārst. </span>
            <b><a>Ceturtdiena,  </a></b>
              <a>2023</a>
              <small>.gada </small>
              <b>28.septembris</b>
              <span class="nedruka">
                <span slass="nedruka">        </span>
              </span>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <StundaKUL />
            <StundaLV />
            <StundaMat />
            <StundaPro />
          </td>
        </tr>
      </tbody>
      </table>
      <tr height="0">
        <td colspan="5"></td>
      </tr>
      <table class="tabula">
      <tbody>
        <tr class="tr1">
          <td>
            <span class="info2">Pārst. </span>
            <b><a>Piektdiena,  </a></b>
              <a>2023</a>
              <small>.gada </small>
              <b>29.septembris</b>
              <span class="nedruka">
                <span slass="nedruka">        </span>
              </span>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <StundaPro />
            <StundaPro />
          </td>
        </tr>
      </tbody>
      </table>
    </div>
</div>
  );
}
export default App;