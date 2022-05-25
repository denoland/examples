import _ from "https://esm.sh/koa-route@3.2.0";
import Koa from "https://esm.sh/koa@2.13.4";
const app = new Koa();

const db = {
  tobi: { name: 'tobi', species: 'ferret' },
  loki: { name: 'loki', species: 'ferret' },
  jane: { name: 'jane', species: 'ferret' }
};

const pets = {
  list: (ctx) => {
    const names = Object.keys(db);
    ctx.body = `
      <div>
        <h1>Pets</h1>
        <ul>
          ${names.map((name) => {
            return `<li><a href="/pets/${name}">${name}</a></li>`;
          })}
        </ul>
      </div>
    `;
  },

  show: (ctx, name) => {
    const pet = db[name];
    if (!pet) return ctx.throw('Cannot find that pet', 404);
    ctx.body = `
      <div>
        <h1>${pet.name} is a ${pet.species}</h1>
      </div>
    `;
  }
};

app.use(_.get('/pets', pets.list));
app.use(_.get('/pets/:name', pets.show));

app.use(ctx => {
  ctx.body = `
    <div>
      <h1>Deno x Koa</h1>
      <p>
        This is a demo of an app with Deno and Koa. Read more here.
      </p>
      <ul>
        <li><a href="/pets/">Pets</a></li>
      </ul>
    </div>
  `;
});

console.log("Now listening on localhost:8000.");
app.listen(8000);