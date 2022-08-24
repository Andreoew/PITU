# Create link shortener

  <h1>Technologies used in the backend:</h1>
  <span>- Use of MVC to standardize the project</span>
  <p>* Node.</p>
  <p>* Typescript.</p>
  <p>* Express.</p>
  <p>* Mysql.</p>
  <p>* Sequilize.</p>
  <p>* Cors.</p>
  

  <span>After downloading the project, inside the backend folder, start with the command:
        npm start</span>
<span>Creates a "database.ts" file at the root of your project to include the following content in this file:</span>

      '''   
            import { Sequelize } from 'sequelize';

            const sequelize = new Sequelize('mysql://root:suasenha@localhost:3306/nomedodatabase');

            export default sequelize;
      '''




  <h1>Technologies used in the frontend:</h1>
  <p>* React</p>