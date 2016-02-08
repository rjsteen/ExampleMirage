export default function(server) {
  server.createList('posts', 10);
  server.loadFixtures();

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);
}
