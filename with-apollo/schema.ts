// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `

  type Dinosaur {
    name: String
    description: String
  }

  type Query {
    dinosaurs: [Dinosaur]
    dinosaur(name: String): Dinosaur
  }
`;
