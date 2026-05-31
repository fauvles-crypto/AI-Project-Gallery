/**
 * @jest-environment node
 */
import { GET } from "../../app/api/prompts/route";

describe("GET /api/prompts", () => {
  it("retourne un statut 200 et un tableau non vide", async () => {
    const request = new Request("http://localhost/api/prompts");
    const response = GET(request);

    expect(response.status).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThan(0);
    expect(body.total).toBe(body.data.length);
  });

  it("filtre correctement par catégorie", async () => {
    const request = new Request("http://localhost/api/prompts?category=SEO");
    const response = GET(request);

    expect(response.status).toBe(200);

    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);
    expect(body.data.every((p: { category: string }) => p.category === "SEO")).toBe(
      true
    );
  });

  it("retourne une liste vide pour une catégorie inconnue", async () => {
    const request = new Request("http://localhost/api/prompts?category=Inconnu");
    const response = GET(request);

    const body = await response.json();
    expect(body.data).toEqual([]);
    expect(body.total).toBe(0);
  });
});
