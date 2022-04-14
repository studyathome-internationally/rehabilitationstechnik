precision = 200;

y_l = 2;

x = linspace(-80, 25, precision*4);
y = linspace(-y_l, y_l, precision);

[ xx, yy ] = meshgrid(x, y);
# zz = 10 * ones(precision, precision);

A = 1;
x_0 = 2;
z_0 = 10;
omega_0 = 2.4;
delta = 1.8;

# harmonic oscillation
zz = exp(-delta*xx).*(2*A*cos(2*pi*xx));

# polynom
# zz = (xx - 2) .* (xx - 3) .* (xx - 4) .* (xx - 5);

# mesh(xx, yy, zz);
# surf(xx, yy, zz);

# t = 0:0.05:5;
# f = exp(-1.8*-t) .* sin(t);
# plot(t, f);

# https://www.compadre.org/nexusph/course/Propagating_a_wave_pulse_--_the_math
t = 0:0.05:25;
d = 3;
a = 10;
m = 15;
# gaussian pulse shape
# https://en.wikipedia.org/wiki/Gaussian_function
f = a .* exp(-((t-m)./d).^2);
# lorentzian pulse shape
# f = a ./ (1 + ((t-m)/d).^2);
# plot(t, f);

# sinc function
# cf. https://en.wikipedia.org/wiki/Sinc_function

# n = 15;
# g = exp(-delta*-(t)).*(2*A*cos(2*pi*-(t)));
# hold on;
#plot(t, g);

t = 0:0.05:25;

# hold on;
# plot(t, f.*g);
d_1 = 1;
a_1 = 150;
m_1 = 15;
n_1 = -2;
f_1 = a_1 .* exp(-((t-m_1)./d_1).^2) - n_1;

d_2 = 0.9;
a_2 = 8;
m_2 = 10;
n_2 = -1;
f_2 = a_2 .* exp(-((t-m_2)./d_2).^2) - n_2;

d_3 = 1;
a_3 = 8;
m_3 = 20;
n_3 = -1;
f_3 = a_3 .* exp(-((t-m_3)./d_3).^2) - n_3;

d_4 = 0.7;
a_4 = -6;
m_4 = 12.4;
n_4 = -1;
f_4 = a_4 .* exp(-((t-m_4)./d_4).^2) - n_4;

d_5 = 0.7;
a_5 = -6;
m_5 = 17.6;
n_5 = -1;
f_5 = a_5 .* exp(-((t-m_5)./d_5).^2) - n_5;

clf;
hold on;
plot(t, f_1,"g*");
plot(t, f_2,"g*");
plot(t, f_3,"g*");
plot(t, f_4,"g*");
plot(t, f_5,"g*");
plot(t, f_1 .* f_2 .* f_3 .* f_4 .* f_5);
hold off;
clf;

t = -25:0.05:25;
dg_1 = 0.8;
ag_1 = 200;
mg_1 = 0;
ng_1 = -2;
g_1 = ag_1 .* exp(-((t-mg_1)./dg_1).^2) - ng_1;
plot(t, g_1);
clf;

ff_1 = a_1 .* exp(-((xx-m_1)./d_1).^2) - n_1;
ff_2 = a_2 .* exp(-((xx-m_2)./d_2).^2) - n_2;
ff_3 = a_3 .* exp(-((xx-m_3)./d_3).^2) - n_3;
ff_4 = a_4 .* exp(-((xx-m_4)./d_4).^2) - n_4;
ff_5 = a_5 .* exp(-((xx-m_5)./d_5).^2) - n_5;

gg_1 = ag_1 .* exp(-((yy-mg_1)./dg_1).^2) - ng_1;

ff = ff_1 .* ff_2 .* ff_3 .* ff_4 .* ff_5 .* gg_1;

surf(xx,yy,ff, "facecolor", "texturemap", "edgealpha", 0);
# axis("equal");
xlim([-80, 25]);
# ylim([
view([25 45]);
