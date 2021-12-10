package com.eladoscuro;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtFilter extends GenericFilterBean {

    @Override
    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        HttpServletResponse httpServletResponse = (HttpServletResponse) response;

        String authHeader = httpServletRequest.getHeader("authorization");

        httpServletRequest.getRequestURL();
        if (((httpServletRequest.getRequestURL().toString().contains("/api/users")) &&
                ((httpServletRequest.getMethod().equals("POST") ||
                        (httpServletRequest.getMethod().equals("PUT")) ||
                        (httpServletRequest.getMethod().equals("GET")) ||
                        (httpServletRequest.getMethod().equals("DELETE")))) ||
                (httpServletRequest.getRequestURL().toString().contains("/api/productos")) &&
                        ((httpServletRequest.getMethod().equals("POST") ||
                                (httpServletRequest.getMethod().equals("PUT")) ||
                                (httpServletRequest.getMethod().equals("DELETE"))))))
        {

            if ((authHeader == null) || (!authHeader.startsWith("Bearer "))){
                throw new ServletException("1. Invalid Token!");
            }// if == null ! Bearer
            String token= authHeader.substring(7); // despues del Bearer, por eso el 7
            try  {
                Claims claims = Jwts.parser().setSigningKey("this-secret-is-not-very-secret-99")
                        .parseClaimsJws(token).getBody();
                request.setAttribute( "claims", claims );
            }  catch ( SignatureException | MalformedJwtException e ) {
                throw new ServletException( "2. Invalid Token!" );
            }//catch
        }// PST, PUT, GET, DELETE
        chain.doFilter(httpServletRequest, httpServletResponse);
    }//doFilter
}//JwtFilter
