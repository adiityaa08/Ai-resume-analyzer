import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Landing page becomes index (/)
  index("routes/Landing.tsx"),

  // Dashboard after login
  route("/dashboard", "routes/home.tsx"),

  // Auth page
  route("/auth", "routes/auth.tsx"),

  // Upload + Resume
  route("/upload", "routes/upload.tsx"),
  route("/resume/:id", "routes/resume.tsx"),
] satisfies RouteConfig;
