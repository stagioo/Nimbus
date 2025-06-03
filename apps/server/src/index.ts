import { Hono } from "hono";
import { cors } from "hono/cors";
import filesRoutes from "@/apps/server/src/routes/files";
import authRoutes from "@/apps/server/src/routes/auth";
import waitlistRoutes from "@/apps/server/src/routes/waitlist";

const app = new Hono();

app.use(
	cors({
		origin: process.env.FRONTEND_URL!,
		credentials: true,
		allowHeaders: ["Content-Type", "Authorization"],
		allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	})
);

// Health check
app.get("/kamehame", c => c.text("HAAAAAAAAAAAAAA"));

app.route("/ç", filesRoutes);
app.route("/api/auth", authRoutes);
app.route("/waitlist", waitlistRoutes);

export default {
	port: 1284,
	fetch: app.fetch,
};
