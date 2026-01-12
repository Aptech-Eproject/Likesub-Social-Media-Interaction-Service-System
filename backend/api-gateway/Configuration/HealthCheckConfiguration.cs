namespace api_gateway.Configuration;

public static class HealthCheckConfiguration
{
    public static IServiceCollection AddHealthCheckServices(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        var userServiceUrl = configuration["Services:User:BaseUrl"];
        var socialServiceUrl = configuration["Services:Social:BaseUrl"];

        if (string.IsNullOrWhiteSpace(userServiceUrl) ||
            string.IsNullOrWhiteSpace(socialServiceUrl))
        {
            throw new InvalidOperationException(
                "Service base URLs are not configured for health checks.");
        }

        services.AddHealthChecks()
            .AddUrlGroup(new Uri($"{userServiceUrl}/health"), "user-service")
            .AddUrlGroup(new Uri($"{socialServiceUrl}/health"), "social-service");

        return services;
    }
}
