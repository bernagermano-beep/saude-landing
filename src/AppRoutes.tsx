import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogArticle from "./pages/BlogArticle";
import BlogPage from "./pages/BlogPage";
import AnalysisPage from "./pages/AnalysisPage";
import CommercialPage from "./pages/CommercialPage";
import VidaEmpresarialPage, { vidaCityConfigs } from "./pages/VidaEmpresarialPage";
import SaudeLandingPage from "./pages/SaudeLandingPage";
import { commercialPages } from "./data/commercialPages";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/troca-plano-saude" element={<SaudeLandingPage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/analise-gratuita-apolice" element={<AnalysisPage />} />
    <Route path="/vida-empresarial" element={<VidaEmpresarialPage legacy />} />
    <Route path="/seguro-de-vida-empresarial-sorocaba" element={<VidaEmpresarialPage city={vidaCityConfigs.sorocaba} />} />
    <Route path="/seguro-de-vida-empresarial-sao-paulo" element={<VidaEmpresarialPage city={vidaCityConfigs["sao-paulo"]} />} />
    <Route path="/seguro-de-vida-empresarial-guarulhos" element={<VidaEmpresarialPage city={vidaCityConfigs.guarulhos} />} />
    {commercialPages.map((page) => (
      <Route key={page.slug} path={`/${page.slug}`} element={<CommercialPage page={page} />} />
    ))}
    <Route path="/blog/:slug" element={<BlogArticle />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
